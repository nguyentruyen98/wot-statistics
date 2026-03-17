"use client";

import { Button } from "@workspace/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { GlobeIcon } from "lucide-react";
import { useLocale } from "next-intl";
import { useTransition } from "react";

import { Locale, locales } from "@/i18n/config";
import { setUserLocale } from "@/i18n/utils/locale";

const localeLabels: Record<Locale, string> = {
  en: "English",
  vn: "Tiếng Việt",
};

const LocaleSwitcher = () => {
  const currentLocale = useLocale();
  const [isPending, startTransition] = useTransition();

  function onChange(value: string) {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" disabled={isPending}>
          <GlobeIcon className="size-4" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup value={currentLocale} onValueChange={onChange}>
          {locales.map((locale) => (
            <DropdownMenuRadioItem key={locale} value={locale}>
              {localeLabels[locale]}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LocaleSwitcher;
