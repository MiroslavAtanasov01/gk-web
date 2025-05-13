"use client";

import CampaignLayout from "@/components/CampaignLayout";
import CampaignTable from "@/components/CampaignTable";

export default function NewscampaignPage() {
  return (
    <CampaignLayout
      title="СЪЗДАВАНЕ НА ВЪПРОСИ - ОТГОВОРИ"
      leftIcon="/images/campaign/topic.svg"
      leftTitle="ВЪПРОСИ"
      rightIcon="/images/campaign/questions-blue.svg"
      rightTitle="ОТГОВОРИ"
      leftContent={<CampaignTable />}
      rightContent={<CampaignTable />}
      onSave={() => {
        console.log("Saving news campaign...");
      }}
    />
  );
}
