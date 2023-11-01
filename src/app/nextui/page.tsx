'use client';

import { NextUIProvider } from "@nextui-org/react";

import { Content } from '@/components/nextui/home/content';
import { Layout } from "@/components/nextui/layout/layout";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// https://nextui-dashboard-template.vercel.app/

const NextUI = () => (
  <NextThemesProvider defaultTheme="system" attribute="class">
    <NextUIProvider>
      <Layout>
        <Content />
      </Layout>
    </NextUIProvider>
  </NextThemesProvider>
);

export default NextUI;
