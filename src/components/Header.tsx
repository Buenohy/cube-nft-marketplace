import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Header() {
  return (
    <div className="flex items-center gap-2">
      <h1>Cube NFT</h1>
      <ConnectButton label="Connect" />
    </div>
  );
}
