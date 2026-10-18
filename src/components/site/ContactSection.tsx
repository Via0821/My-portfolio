"use client";

import emailjs from "@emailjs/browser";
import { FormEvent, useState } from "react";

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

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isConfigured()) {
      alert(
        "メール送信の設定が完了していません。.env ファイルに EmailJS の Service ID、Template ID、Public Key、および受信メールアドレスを設定してください。"
      );
      return;
    }

    setLoading(true);
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
          setLoading(false);
          alert("ありがとうございます。できるだけ早くご連絡いたします。");
          setForm({ name: "", email: "", message: "" });
        },
        () => {
          setLoading(false);
          alert(
            "送信に失敗しました。EmailJS の Service ID、Template ID、Public Key がご自身のアカウントのものと一致しているかご確認ください。"
          );
        }
      );
  };

  return (
    <section id="contact" className="scroll-mt-24 border-t border-line" aria-labelledby="contact-title">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div data-reveal>
          <p className="text-[12px] tracking-[0.28em] text-accent">06 — CONTACT</p>
          <h2 id="contact-title" className="mt-4 font-display text-4xl text-paper sm:text-5xl">
            お問い合わせ
          </h2>
          <p className="mt-5 max-w-sm text-[15px] leading-8 text-muted">
            画面の相談から、既存システムの改修、公開後の運用まで。内容が固まっていなくても、現状からお送りください。
          </p>
        </div>

        <form data-reveal onSubmit={onSubmit} className="grid gap-6">
          <label className="grid gap-2 text-sm text-paper">
            名前
            <input
              name="name"
              required
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
              placeholder="山本 太郎"
              className="h-12 border border-line bg-transparent px-4 text-paper outline-none placeholder:text-muted/70 focus:border-accent"
            />
          </label>
          <label className="grid gap-2 text-sm text-paper">
            メール
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
              placeholder="example@gmail.com"
              className="h-12 border border-line bg-transparent px-4 text-paper outline-none placeholder:text-muted/70 focus:border-accent"
            />
          </label>
          <label className="grid gap-2 text-sm text-paper">
            メッセージ
            <textarea
              name="message"
              required
              rows={7}
              value={form.message}
              onChange={(event) => setForm({ ...form, message: event.target.value })}
              placeholder="お問い合わせ内容をご入力ください。"
              className="border border-line bg-transparent px-4 py-3 text-paper outline-none placeholder:text-muted/70 focus:border-accent"
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="h-12 w-fit border border-paper px-8 text-[13px] tracking-[0.16em] text-paper transition-colors hover:border-accent hover:text-accent disabled:opacity-60"
          >
            {loading ? "送信中" : "送信する"}
          </button>
        </form>
      </div>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-[12px] tracking-[0.14em] text-muted sm:flex-row sm:items-center sm:justify-between md:px-8">
          <p>金本 卓弥</p>
          <p>Frontend / Systems</p>
        </div>
      </footer>
    </section>
  );
}
