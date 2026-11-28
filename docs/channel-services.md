# Rycode services overview

The Persian and English services overviews use the layout and motion of the
[Channel Studio reference](https://channel-studio.framer.website/services) with
Rycode's shared header, footer, typography, colors and action buttons.

Both routes read the same localized service catalog as the service detail
pages. The interactive panels and service rows link to those existing pages.
The process and contact photos are kept locally in `public/brand/channel-services`.

The interactive panels and service rows use the 16:9 artwork from the first
[homepage card in each service category](home-service-card-images.md). Services
without a homepage card use the artwork from their catalog entry.

`ChannelServicesMotion` handles the five-second panel rotation, pointer and
keyboard focus pause, and scroll-based photo assembly (6×4 tiles on desktop,
4×4 on phones). Reduced motion keeps the panels manually selectable and the
process image assembled.
