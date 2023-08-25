import axios from 'axios';

export enum EmbedColor {
  Green = 0x00ff00,
  Red = 0xff0000,
  Blue = 0x0000ff,
  Yellow = 0xffff00,
}

export enum EmbedType {
  Rich = "rich",
  Image = "image",
  Video = "video",
  GIFV = "gifv",
  Article = "article",
  Link = "link",
}

export interface APIEmbedFooter {
  text: string;
  icon_url?: string;
  proxy_icon_url?: string;
}

export interface APIEmbedField {
  name: string;
  value: string;
  inline?: boolean;
}

export interface APIEmbedImage {
  url: string;
  proxy_url?: string;
  height?: number;
  width?: number;
}

export interface APIEmbedThumbnail {
  url: string;
  proxy_url?: string;
  height?: number;
  width?: number;
}

export interface APIEmbedVideo {
  url?: string;
  proxy_url?: string;
  height?: number;
  width?: number;
}

export interface APIEmbedProvider {
  name?: string;
  url?: string;
}

export interface APIEmbedAuthor {
  name: string;
  url?: string;
  icon_url?: string;
  proxy_icon_url?: string;
}

export interface Embed {
  title?: string;
  type?: EmbedType;
  description?: string;
  url?: string;
  timestamp?: string;
  color?: number;
  footer?: APIEmbedFooter;
  image?: APIEmbedImage;
  thumbnail?: APIEmbedThumbnail;
  video?: APIEmbedVideo;
  provider?: APIEmbedProvider;
  author?: APIEmbedAuthor;
  fields?: APIEmbedField[];
}

export interface WebhookMessage {
  content?: string;
  username?: string;
  avatar_url?: string;
  tts?: boolean;
  embeds?: Embed[];
}

export async function sendDiscordWebhookMessage(webhook: string, message: WebhookMessage) {
  return await axios.post(webhook, message, { headers: { 'Content-Type': 'application/json' } });
}