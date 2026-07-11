import React from 'react';
import { prisma as prismaClient } from '../../../../lib/prisma';
import SettingsClient from './SettingsClient';

export default async function SettingsPage() {
  const settings = await prismaClient.setting.findMany();
  
  const settingsObj = settings.reduce((acc, curr) => {
    acc[curr.key] = curr.value;
    return acc;
  }, {});

  return <SettingsClient initialSettings={settingsObj} />;
}
