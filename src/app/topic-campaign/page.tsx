"use client";

import CampaignLayout from "@/components/CampaignLayout";
import CampaignTable from "@/components/CampaignTable";

export default function NewsCampaignPage() {
  return (
    <CampaignLayout
      title="СЪЗДАВАНЕ НА КАМПАНИЯ - ТЕМА"
      leftIcon="/images/campaign/campaign.svg"
      leftTitle="КАМПАНИЯ"
      rightIcon="/images/campaign/topic.svg"
      rightTitle="ТЕМА"
      leftContent={<CampaignTable sectionTitle="Кампания" />}
      rightContent={<CampaignTable sectionTitle="Теми" />}
      onSave={() => {
        console.log("Saving news campaign...");
      }}
    />
  );
}
