"use client";

import emailjs from "@emailjs/browser";
import { FormEvent, useState } from "react";
import { resume } from "./content";
import { SectionHeading } from "./SectionHeading";

const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  contactName: process.env.NEXT_PUBLIC_CONTACT_NAME || "Portfolio Owner",
};

const isConfigured = () =>
  Boolean(
    emailjsConfig.serviceId &&
      emailjsConfig.templateId &&
      emailjsConfig.publicKey &&
      emailjsConfig.contactEmail
  );

type Status = "idle" | "sending" | "sent" | "error";

const fallback = emailjsConfig.contactEmail
  ? `お手数ですが ${emailjsConfig.contactEmail} まで直接ご連絡ください。`
  : "お手数ですが、時間をおいて再度お試しください。";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isConfigured()) {
      if (process.env.NODE_ENV !== "production") {
        console.warn("EmailJS is not configured. Copy .env.example to .env and fill in your values.");
      }
      setStatus("error");
      return;
    }

    setStatus("sending");
    emailjs
      .send(
        emailjsConfig.serviceId!,
        emailjsConfig.templateId!,
        {
          from_name: form.name,
          to_name: emailjsConfig.contactName,
          from_email: form.email,
          to_email: emailjsConfig.contactEmail,
          reply_to: form.email,
          message: form.message,
        },
        emailjsConfig.publicKey
      )
      .then(
        () => {
          setStatus("sent");
          setForm({ name: "", email: "", message: "" });
        },
        () => setStatus("error")
      );
  };

  return (
    <section id="contact" className="contact-band relative scroll-mt-20 overflow-hidden" aria-labelledby="contact-title">
      <div className="relative">
        <img src="/ink-mountains.webp" alt="" loading="lazy" className="contact-mountains" />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pb-40 pt-24 md:px-8 md:pb-56 md:pt-32 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <SectionHeading id="contact-title" index="06" label="CONTACT" title="お問い合わせ" />
            <p data-reveal className="mt-8 max-w-sm text-[15px] leading-8 text-nezumi">
              画面の相談から、既存システムの改修、公開後の運用まで。内容が固まっていなくても、現状からお送りください。
            </p>
          </div>

          <form data-reveal onSubmit={onSubmit} className="contact-form grid gap-6">
            <label className="field">
              <span>お名前</span>
              <input
                name="name"
                required
                autoComplete="name"
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                placeholder="山本 太郎"
              />
            </label>
            <label className="field">
              <span>メールアドレス</span>
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                placeholder="example@gmail.com"
              />
            </label>
            <label className="field">
              <span>お問い合わせ内容</span>
              <textarea
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
                placeholder="ご相談内容をご自由にご記入ください。"
              />
            </label>
            <div className="flex flex-wrap items-center gap-5">
              <button type="submit" disabled={status === "sending"} className="btn-ink">
                {status === "sending" ? "送信中…" : "送信する"}
                <span aria-hidden="true">→</span>
              </button>
              <p role="status" aria-live="polite" className="text-[14px] leading-7">
                {status === "sent" && (
                  <span className="text-sumi">送信しました。内容を確認のうえ、折り返しご連絡いたします。</span>
                )}
                {status === "error" && <span className="text-[#9b3b2f]">送信できませんでした。{fallback}</span>}
              </p>
            </div>
          </form>
        </div>
      </div>

      <footer className="site-footer relative">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <p className="font-display text-lg tracking-[0.12em] text-washi">金本 卓弥</p>
            <p className="mt-1 text-[12px] tracking-[0.18em] text-washi/60">Web Engineer — Frontend / Systems / AI</p>
          </div>
          <nav aria-label="フッター" className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-washi/80">
            <a href="#top" className="hover:text-kin-leaf">
              ページ上部へ ↑
            </a>
            <a href={resume.href} download={resume.filename} className="hover:text-kin-leaf">
              職務経歴書（PDF）
            </a>
          </nav>
          <p className="text-[12px] text-washi/50">© {new Date().getFullYear()} Takuya Kanemoto</p>
        </div>
      </footer>
    </section>
  );
}
