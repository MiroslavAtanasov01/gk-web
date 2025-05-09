import { CampaignDetails } from "@/app/auto-reports/page";
import React from "react";

const CampaignInfo: React.FC<{ bulletinCampaignDetails: CampaignDetails }> = ({
  bulletinCampaignDetails,
}) => {
  return (
    <div className="text-primary space-y-1 rounded-xl bg-[#D7D8D9] p-3 text-xl">
      <div className="grid grid-cols-2">
        <p className="pr-2 text-left font-medium">Количество Теми:</p>
        <p className="text-left text-gray-950">
          {bulletinCampaignDetails.themeCount}
        </p>
      </div>
      <div className="grid grid-cols-2">
        <p className="pr-2 text-left font-medium">Количество Въпроси:</p>
        <p className="text-left text-gray-950">
          {bulletinCampaignDetails.questionCount}
        </p>
      </div>
      <div className="grid grid-cols-2">
        <p className="pr-2 text-left font-medium">Срок на Кампанията:</p>
        <p className="text-left text-gray-950">
          {bulletinCampaignDetails.duration}
        </p>
      </div>
      <div className="grid grid-cols-2">
        <p className="pr-2 text-left font-medium">Локация:</p>
        <p className="text-left text-gray-950">
          {bulletinCampaignDetails.location}
        </p>
      </div>
      <div className="grid grid-cols-2">
        <p className="pr-2 text-left font-medium">Количество участници:</p>
        <p className="text-left text-gray-950">
          {bulletinCampaignDetails.participantCount}
        </p>
      </div>
    </div>
  );
};

export default CampaignInfo;
