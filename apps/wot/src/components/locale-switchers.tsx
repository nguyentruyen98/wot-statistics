"use client";

import { Button } from "@workspace/ui/components/button";
import React, { useTransition } from "react";

import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/i18n/utils/locale";

const LocaleSwitcher = () => {
  const [isPending, startTransition] = useTransition();

  function onChange(value: string) {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <div>
      <Button disabled={isPending} onClick={() => onChange("en")}>
        English
      </Button>
      <Button onClick={() => onChange("vn")}>Vietnamese</Button>
    </div>
  );
};

export default LocaleSwitcher;
