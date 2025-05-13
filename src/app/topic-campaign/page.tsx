"use client";

import CampaignLayout from "@/components/CampaignLayout";
import CampaignTable from "@/components/CampaignTable";

export default function NewsCampaignPage() {
  return (
    <CampaignLayout
      title="СЪЗДАВАНЕ НА КАМПАНИЯ - ТЕМА"
      leftIcon="/images/campaign/campaign.svg"
      leftTitle="КАМПАНИЯ"
      rightIcon="/images/campaign/questions-blue.svg"
      rightTitle="ТЕМА"
      leftContent={<CampaignTable />}
      rightContent={<CampaignTable />}
      onSave={() => {
        console.log("Saving news campaign...");
      }}
    />
  );
}
