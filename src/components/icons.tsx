import {
  MetaLogo,
  GoogleLogo,
  DropboxLogo,
  AmazonLogo,
  GithubLogo,
  AppleLogo,
  WindowsLogo,
  DevToLogo,
} from '@phosphor-icons/react';

const Icon = ({ icon, size = 24 }: { icon: string; size?: number }) => {
  if (icon === 'meta') return <MetaLogo size={size} />;
  if (icon === 'google') return <GoogleLogo size={size} />;
  if (icon === 'dropbox') return <DropboxLogo size={size} />;
  if (icon === 'amazon') return <AmazonLogo size={size} />;
  if (icon === 'github') return <GithubLogo size={size} />;
  if (icon === 'apple') return <AppleLogo size={size} />;
  if (icon === 'microsoft') return <WindowsLogo size={size} />;

  return <DevToLogo size={size} />;
};

export default Icon;
