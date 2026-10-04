import { Composition } from 'remotion';
import { BlockchainIntro } from './BlockchainIntro';

export const RemotionRoot = () => {
  return (
    <Composition
      id="BlockchainIntro"
      component={BlockchainIntro}
      durationInFrames={150}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={{ title: 'HubBlock', blockCount: 4 }}
    />
  );
};
