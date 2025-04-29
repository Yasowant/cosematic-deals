import React from 'react';
import { Button } from '@/components/ui/button';
import { FaFacebook, FaGoogle, FaInstagram } from 'react-icons/fa';

interface SocialButtonProps {
  provider: 'google' | 'facebook' | 'instagram';
  onClick: () => void;
  isLoading?: boolean;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  provider,
  onClick,
  isLoading = false,
}) => {
  const getIcon = () => {
    switch (provider) {
      case 'google':
        return <FaGoogle className="h-5 w-5" />;
      case 'facebook':
        return <FaFacebook className="h-5 w-5" />;
      case 'instagram':
        return <FaInstagram className="h-5 w-5" />;
      default:
        return null;
    }
  };

  const getColor = () => {
    switch (provider) {
      case 'google':
        return 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100';
      case 'facebook':
        return 'bg-[#1877f2] text-white hover:bg-[#1864d2]';
      case 'instagram':
        return 'bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white hover:opacity-90';
      default:
        return '';
    }
  };

  const getText = () => {
    return `Continue with ${
      provider.charAt(0).toUpperCase() + provider.slice(1)
    }`;
  };

  return (
    <Button
      type="button"
      className={`w-full flex items-center justify-center gap-2 ${getColor()}`}
      onClick={onClick}
      disabled={isLoading}
    >
      {getIcon()}
      <span>{isLoading ? 'Connecting...' : getText()}</span>
    </Button>
  );
};

export default SocialButton;
