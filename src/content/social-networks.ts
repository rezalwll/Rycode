type SocialNetwork = {
  name: string;
  icon: string;
  href?: string;
};

// Account addresses will be supplied later; avoid linking to unrelated profiles
// or the platforms' generic home pages in the meantime.
export const socialNetworks: SocialNetwork[] = [
  { name: "Instagram", icon: "/assets/edd06ce955caf15f.png" },
  { name: "Telegram", icon: "/brand/social/telegram.svg" },
  { name: "Bale", icon: "/brand/social/bale.svg" },
];
