# Rycode services overview

The Persian and English services overviews use the layout and motion of the
[Channel Studio reference](https://channel-studio.framer.website/services) with
Rycode's shared header, footer, typography, colors and action buttons.

Both routes read the same localized service catalog as the service detail
pages. The interactive panels and service rows link to those existing pages.
The process and contact photos are kept locally in `public/brand/channel-services`.

The capability illustrations use sample interface imagery from Gr8r Studio's
[AIwork Automation](https://www.framer.com/marketplace/templates/aiwork-automation/),
Creative Dima's [Gatewell](https://www.framer.com/marketplace/templates/gatewell/)
for project rescue, and Lunis Design's
[Cartelle](https://www.framer.com/marketplace/templates/cartelle/) for ecommerce.
These are free Framer Marketplace templates under the
[limited commercial license](https://www.framer.com/legal/community-terms/1.0#7-ownership-license-grants).
The images are framed for the desktop and mobile cards and stored as local
WebP files in `public/brand/channel-services/capabilities`. Images set in the
CMS take precedence over these illustrations.

`ChannelServicesMotion` handles the five-second panel rotation, pointer and
keyboard focus pause, and scroll-based photo assembly (6×4 tiles on desktop,
4×4 on phones). Reduced motion keeps the panels manually selectable and the
process image assembled.
