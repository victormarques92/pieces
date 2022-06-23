import React, { useCallback } from 'react';

import { BoxImage } from './styles';

interface AvatarProps {
  name: string;
  image?: string;
}

const Avatar: React.FC<AvatarProps> = ({ name, image }) => {
  const shortName = useCallback(() => {
    const splitName = name.trim().split(' ');
    const firstName = splitName[0];
    const lastName = splitName[splitName.length - 1];
    const short = firstName.charAt(0) + lastName.charAt(0);

    if (splitName.length > 1) {
      return short.toUpperCase();
    }

    return firstName.charAt(0).toUpperCase();
  }, [name]);

  return (
    <BoxImage>
      {image ? (
        <img src={image} alt={name} title={name} />
      ) : (
        shortName()
      )}
    </BoxImage>
  );
};

export default Avatar;
