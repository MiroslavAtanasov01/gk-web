"use client";

import CampaignLayout from "@/components/CampaignLayout";
import CampaignTable from "@/components/CampaignTable";

export default function NewscampaignPage() {
  return (
    <CampaignLayout
      title="СЪЗДАВАНЕ НА ВЪПРОСИ - ОТГОВОРИ"
      leftIcon="/images/campaign/questions-blue.svg"
      leftTitle="ВЪПРОСИ"
      rightIcon="/images/campaign/blue-check.svg"
      rightTitle="ОТГОВОРИ"
      leftContent={<CampaignTable sectionTitle="Въпрос" />}
      rightContent={<CampaignTable sectionTitle="Отговори" />}
      onSave={() => {
        console.log("Saving news campaign...");
      }}
    />
  );
}
