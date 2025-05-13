"use client";

import CampaignLayout from "@/components/CampaignLayout";
import CampaignTable from "@/components/CampaignTable";

export default function NewsCampaignPage() {
  return (
    <CampaignLayout
      title="СЪЗДАВАНЕ НА ТЕМА - ВЪПРОСИ"
      leftIcon="/images/campaign/topic.svg"
      leftTitle="TEMA"
      rightIcon="/images/campaign/questions-blue.svg"
      rightTitle="ВЪПРОСИ"
      leftContent={<CampaignTable />}
      rightContent={<CampaignTable />}
      onSave={() => {
        console.log("Saving news campaign...");
      }}
    />
  );
}
