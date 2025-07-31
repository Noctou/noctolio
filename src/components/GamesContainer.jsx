import HoverVideo from './HoverVideo';

import osuThumbnail from '../assets/osu-thumbnail.png';
import osu from '../assets/videos/osu-gameplay.mp4';

import valorantThumbnail from '../assets/valorant-thumbnail.jpg';
import valorant from '../assets/videos/valorant-gameplay.mp4';

import genshinThumbnail from '../assets/genshin-thumbnail.jpg';
import genshin from '../assets/videos/genshin-gameplay.mp4';

import hsrThumbnail from '../assets/hsr-thumbnail.jpg';
import hsr from '../assets/videos/hsr-gameplay.mp4';

export default function Games() {
  return (
    <div className="games-container">
      <HoverVideo src={osu} thumbnail={osuThumbnail} name="Osu!" />
      <HoverVideo src={valorant} thumbnail={valorantThumbnail} name="Valorant" />
      <HoverVideo src={genshin} thumbnail={genshinThumbnail} name="Genshin Impact" />
      <HoverVideo src={hsr} thumbnail={hsrThumbnail} name="Honkai Star Rail" />
    </div>
  );
}