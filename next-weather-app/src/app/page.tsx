"use client";
import React from "react";
import { Card, Divider, Subtitle, Text } from "@tremor/react";
import CityPicker from '@/components/CityPicker';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-[#183B7E] to-slate-600 p-10 flex flex-col justify-center items-center">
      <Card className="bg-white text-gray-500 rounded-lg max-w-4xl mx-auto">
        <Text className="text-6xl  font-bold text-center mb-10">Weather AI</Text>
        <Subtitle className="text-xl text-center">
          Powered by Next.js 13.4, Tailwind CSS, Recharts, Open-Meteo API +
          More!
        </Subtitle>
        <Divider className="my-10 bg-gray-200" />
        <Card className="bg-gradient-to-r from-[#183B7E] to-slate-700 rounded-lg">
          <CityPicker />
        </Card>
      </Card>
    </main>
  )
}
