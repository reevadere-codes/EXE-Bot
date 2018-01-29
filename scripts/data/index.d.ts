import { Commands, Owner, Wikis, Replies } from "../index";

export declare class Data {
   token(): string;
   prefix(): string;
   osuApiKey(): string;
   owner(): Owner
   allEvents(): boolean;
   debug(): boolean;
   wikisEnabled(): boolean;
   wikis(): Wikis;
   commands(): Commands;
   maintance(): boolean;
   replies(): Replies;
}
