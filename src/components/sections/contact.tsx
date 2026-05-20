"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import { config } from "@/data/config";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="min-h-screen max-w-7xl mx-auto pt-24 pb-16 px-4 flex flex-col justify-center">
      <SectionHeader id='contact' className="relative mb-6" title={
        <>
          LET&apos;S WORK <br />
          TOGETHER
        </>} />
      <div className="z-[9999] max-w-xl w-full">
        <Card className="w-full bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl mt-0">
          <CardHeader className="py-4">
            <CardTitle className="text-2xl">Contact Form</CardTitle>
            <CardDescription className="text-sm">
              Please contact me directly at{" "}
              <a
                target="_blank"
                href={`mailto:${config.email}`}
                className="text-gray-200 cursor-can-hover rounded-lg underline"
              >
                {config.email}
              </a>{" "}
              or drop your info here.
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-4">
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};
export default ContactSection;
