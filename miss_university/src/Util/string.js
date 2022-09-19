import React, { useContext } from "react";
export const string = {};

string["ko"] = {
  participant_info: "참가자 소개",
  sequance_participants: "참가자 실시간 정렬 순서",
  sequance_follower: "애니스토리 팔로워 순서",
  search_from_name_nation: "참가자 이름 및 국적으로 검색하실 수 있습니다",
  real_time: "실시간",
  num_ranking: "위",
  see_more_detail: "프로필 자세히 보기",
  contest_participant_info: "월드 미스 유니버시티 참가자 프로필 소개",
  participant_num: "참가번호",
  detail_edu: "교육",
  detail_major: "전공",
  detail_hobby: "취미",
  detail_specialty: "특기",
  name_profile_pic: "(name)의 프로필 사진",
  link_to_her_sns: "참가자 SNS 게시물 보러 가기",
  link_to_sns: "SNS 게시물 보러 가기",
  setting_language: "언어 설정",
  link_to_anychat_homepage: "애니챗HOME",
  link_to_worldmissuniversity_homepage: "월드 미스 유니버시티 HOME",
};

string["en"] = {
  participant_info: "Participant Introduction",
  sequance_participants: "참가자 실시간 정렬 순서",
  sequance_follower: "애니스토리 팔로워 순서",
  search_from_name_nation: "참가자 이름 및 국적으로 검색하실 수 있습니다",
  real_time: "real time",
  num_ranking: "위",
  see_more_detail: "view more details",
  contest_participant_info:
    "World Miss University's Participant Profile Introduction",
  participant_num: "참가번호",
  detail_edu: "Education",
  detail_major: "Major",
  detail_hobby: "Hobby",
  detail_specialty: "Ability",
  name_profile_pic: "(name)의 프로필 사진",
  link_to_her_sns: "참가자 SNS 게시물 보러 가기",
  link_to_sns: "SNS 게시물 보러 가기",
  setting_language: "language Settings",
  link_to_anychat_homepage: "애니챗HOME",
  link_to_worldmissuniversity_homepage: "월드 미스 유니버시티 HOME",
};

export const get_text = (key, language = get_language()) => {
  const obj = string[language] == undefined ? string["en"] : string[language];
  if (obj == undefined) return "-NO TYPE-";

  const ret = obj[key];
  if (ret == undefined) return "-NO KEY-";

  return ret;
};

export const useLanguage = () => {
  const { language } = useContext(LanguageContext);

  return language;
};
