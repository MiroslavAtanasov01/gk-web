import { UserData } from "@/components/user-roles/UserList";
import { Campaign } from "@/types/types";

export const sampleCampaigns: Campaign[] = [
  {
    id: "c1",
    code: "Шифр 001/001 кампания № 001",
    name: "Дълго наименование на кампанията",
    startDate: "09.03.2020",
    endDate: "14.03.2020",
  },
  {
    id: "c2",
    code: "Шифр 001/002 кампания № 002",
    name: "Дълго наименование на кампанията",
    startDate: "16.03.2020 г.",
    endDate: "21.03.2020 г.",
  },
  {
    id: "c3",
    code: "Шифр 001/003 кампания № 003",
    name: "Дълго наименование на кампанията",
    startDate: "23.03.2020 г.",
    endDate: "28.03.2020 г.",
  },
  {
    id: "c4",
    code: "Шифр 001/004 кампания № 004",
    name: "Друга кампания за април",
    startDate: "06.04.2020 г.",
    endDate: "11.04.2020 г.",
  },
  {
    id: "c5",
    code: "Шифр 002/001 кампания № 005",
    name: "Кампания за май",
    startDate: "01.05.2020 г.",
    endDate: "06.05.2020 г.",
  },
  {
    id: "c6",
    code: "Шифр 002/002 кампания № 006",
    name: "Кампания за юни",
    startDate: "15.06.2020 г.",
    endDate: "20.06.2020 г.",
  },
  {
    id: "c7",
    code: "Шифр 002/003 кампания № 007",
    name: "Кампания за юли",
    startDate: "10.07.2020 г.",
    endDate: "15.07.2020 г.",
  },
  {
    id: "c8",
    code: "Шифр 002/004 кампания № 008",
    name: "Кампания за август",
    startDate: "20.08.2020 г.",
    endDate: "25.08.2020 г.",
  },
];

export const campaignData = [
  { id: 1, code: "001/001", name: "кампания № 001" },
  { id: 2, code: "001/001", name: "кампания № 002" },
  { id: 3, code: "001/001", name: "кампания № 010" },
  { id: 4, code: "001/001", name: "кампания № 010" },
  { id: 5, code: "001/001", name: "кампания № 010" },
  { id: 6, code: "001/001", name: "кампания № 010" },
];

export const initialUsersData: UserData[] = [
  { id: 1, num: 1, name: "Иванов Иван Иванов", email: "e-mail_1@gmail.com" },
  { id: 2, num: 2, name: "Петров Петър Петров", email: "e-mail_2@gmail.com" },
  {
    id: 3,
    num: 3,
    name: "Сидеров Константин Сергеев",
    email: "e-mail_2@gmail.com",
  },
  {
    id: 4,
    num: 4,
    name: "Георгиев Георги Георгиев",
    email: "e-mail_3@gmail.com",
  },
  {
    id: 5,
    num: 5,
    name: "Димитров Димитър Димитров",
    email: "e-mail_4@gmail.com",
  },
  {
    id: 6,
    num: 6,
    name: "Николов Николай Николов",
    email: "e-mail_5@gmail.com",
  },
  { id: 7, num: 7, name: "Стоянов Стоян Стоянов", email: "e-mail_6@gmail.com" },
  { id: 8, num: 8, name: "Павлов Павел Павлов", email: "e-mail_7@gmail.com" },
];
