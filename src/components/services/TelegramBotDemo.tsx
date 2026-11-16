"use client";

import Link from "next/link";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { ArrowUpLeft, Check, FileText, RotateCcw, Send } from "lucide-react";
import { ContactForm, FormField, FormSubmit } from "@/components/ContactForm";
import {
  telegramBotSlug,
  telegramBotTypes,
  telegramDemos,
} from "./telegram-bot-copy";
import styles from "./TelegramBotPage.module.css";

const BotTypeContext = createContext<{
  botType: string;
  chooseBot: (value: string) => void;
}>({ botType: "", chooseBot: () => {} });

export function TelegramBotProvider({ children }: { children: ReactNode }) {
  const [botType, chooseBot] = useState("");
  return (
    <BotTypeContext.Provider value={{ botType, chooseBot }}>
      {children}
    </BotTypeContext.Provider>
  );
}

export function TelegramBotDemo() {
  const [scenarioId, setScenarioId] = useState("order");
  const [answers, setAnswers] = useState<string[]>([]);
  const history = useRef<HTMLDivElement>(null);
  const controls = useRef<HTMLDivElement>(null);
  const nextFocus = useRef(false);
  const { chooseBot } = useContext(BotTypeContext);
  const scenario =
    telegramDemos.find((item) => item.id === scenarioId) ?? telegramDemos[0];
  const activeStep = scenario.steps[answers.length];
  const finished = !activeStep;
  const isCatalog = scenario.id === "catalog";

  useEffect(() => {
    const messages = history.current;
    if (messages)
      messages.scrollTop = answers.length ? messages.scrollHeight : 0;
    if (nextFocus.current) {
      (controls.current?.querySelector("button") ?? messages)?.focus({
        preventScroll: true,
      });
      nextFocus.current = false;
    }
  }, [answers]);

  return (
    <section
      className={styles.demo}
      id="telegram-demo"
      aria-labelledby="telegram-demo-title"
    >
      <div className={styles.demoHeader}>
        <span className={styles.avatar}>
          <Send size={20} aria-hidden="true" />
        </span>
        <div>
          <h2 id="telegram-demo-title">رباتت از نگاه مشتری</h2>
          <p>دمو با داده‌های نمونه، داخل همین صفحه</p>
        </div>
        <button
          type="button"
          className={styles.reset}
          onClick={() => setAnswers([])}
        >
          <RotateCcw size={16} aria-hidden="true" />
          <span>از اول</span>
        </button>
      </div>
      <fieldset className={styles.scenarios}>
        <legend className={styles.srOnly}>سناریوی ربات رو انتخاب کن</legend>
        {telegramDemos.map(({ id, title }) => (
          <label key={id}>
            <input
              type="radio"
              name="telegram-demo-scenario"
              value={id}
              checked={scenario.id === id}
              onChange={() => {
                setScenarioId(id);
                setAnswers([]);
              }}
              aria-controls="telegram-demo-conversation"
            />
            <span>{title}</span>
          </label>
        ))}
      </fieldset>
      <div className={styles.conversation} id="telegram-demo-conversation">
        <div
          ref={history}
          className={styles.history}
          role="region"
          aria-label="مکالمهٔ نمونه"
          tabIndex={0}
        >
          {answers.map((answer, index) => (
            <div className={styles.exchange} key={index}>
              <p className={styles.reply}>{scenario.steps[index].prompt}</p>
              <p className={styles.sent}>{answer}</p>
            </div>
          ))}
          <div
            className={styles.exchange}
            aria-live="polite"
            aria-atomic="true"
          >
            <p className={styles.reply}>
              {activeStep?.prompt ?? scenario.result}
            </p>
            {finished && (
              <span className={styles.demoCode}>
                {isCatalog ? (
                  <FileText size={15} aria-hidden="true" />
                ) : (
                  <Check size={15} aria-hidden="true" />
                )}
                <bdi>{scenario.code}</bdi>
              </span>
            )}
          </div>
        </div>
        <div className={styles.demoActions} ref={controls}>
          {activeStep?.options.map((option) => (
            <button
              type="button"
              key={option}
              onClick={(event) => {
                nextFocus.current = event.detail === 0;
                setAnswers([...answers, option]);
              }}
            >
              {option}
            </button>
          ))}
          {answers.length > 0 && !finished && (
            <button
              type="button"
              className={styles.back}
              onClick={(event) => {
                nextFocus.current = event.detail === 0;
                setAnswers(answers.slice(0, -1));
              }}
            >
              مرحلهٔ قبل
            </button>
          )}
        </div>
      </div>
      <div className={styles.demoFooter}>
        <p aria-live="polite">
          {finished ? (
            <>
              نمای مدیر · {scenario.manager.title}، {scenario.manager.status}
            </>
          ) : (
            "یکی از گزینه‌ها رو بزن و مسیر ربات رو امتحان کن."
          )}
        </p>
        <a
          href="#telegram-inquiry"
          onClick={() => chooseBot(scenario.inquiryType)}
        >
          یه ربات شبیه این می‌خوام <ArrowUpLeft size={15} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

export function TelegramBotInquiry() {
  const { botType, chooseBot } = useContext(BotTypeContext);
  return (
    <ContactForm
      className={styles.form}
      messageContext={{ field: "Telegram bot type", label: "نوع ربات" }}
    >
      <input type="hidden" name="Service" value={telegramBotSlug} />
      <div className={styles.formRow}>
        <label>
          نام و نام خانوادگی
          <FormField
            as="input"
            name="Name"
            autoComplete="name"
            required
            minLength={2}
            maxLength={120}
          />
        </label>
        <label>
          شماره تماس
          <FormField
            as="input"
            name="Phone"
            type="tel"
            autoComplete="tel"
            required
            maxLength={25}
          />
        </label>
      </div>
      <input type="hidden" name="Email" value="" />
      <label>
        نوع ربات
        <select
          name="Telegram bot type"
          value={botType}
          onChange={(event) => chooseBot(event.target.value)}
        >
          <option value="">برای انتخاب نیاز به راهنمایی دارم</option>
          {telegramBotTypes.map(({ title }) => (
            <option key={title}>{title}</option>
          ))}
        </select>
      </label>
      <label>
        ربات قراره چه کاری انجام بده؟
        <FormField
          as="textarea"
          name="Message"
          rows={4}
          minLength={10}
          maxLength={4800}
          required
          placeholder="مثلاً مشتری محصولش رو در تلگرام انتخاب کنه و سفارش به پنل فروشگاه برسه."
        />
      </label>
      <FormSubmit className={styles.primary}>
        ثبت درخواست ساخت ربات <ArrowUpLeft size={17} aria-hidden="true" />
      </FormSubmit>
      <Link href="/privacy" className={styles.privacy}>
        حریم خصوصی
      </Link>
    </ContactForm>
  );
}
