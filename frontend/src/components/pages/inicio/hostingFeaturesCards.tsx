"use client";

import { motion } from "motion/react";
import { Glass } from "@/components/ui/glass";
import { IconMapper } from "@/lib/icons";
import type { HostingFeature } from "@/types/directus";

interface HostingFeaturesCardsProps {
  hostingFeatures: HostingFeature[];
}

export default function HostingFeaturesCards({
  hostingFeatures,
}: HostingFeaturesCardsProps) {
  return (
    <div className="glassmorphism grid w-full gap-6 rounded-xl p-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8 md:p-8">
      {hostingFeatures.map((feature) => (
        <Glass
          key={feature.title}
          className="flex flex-col gap-4"
          paddingBottom="xl"
          asChild
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
          >
            <IconMapper className="mb-3 size-16" name={feature.icon.name} />
            <h3 className="font-semibold text-xl">{feature.title}</h3>
            <p>{feature.content}</p>
          </motion.div>
        </Glass>
      ))}
    </div>
  );
}
