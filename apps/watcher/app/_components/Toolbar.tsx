import { useSelectedLayoutSegment } from 'next/navigation';
import React from 'react';

import { Toolbar as UiKitToolbar } from '@rosen-bridge/ui-kit';

import ToolbarActions from '@/_components/ToolbarActions';

const pageTitleMap: Record<string, string> = {
  '(home)': 'Home',
  actions: 'Actions',
  events: 'Events',
  health: 'Health',
  observations: 'Observations',
  revenues: 'Revenues',
};

const Toolbar = () => {
  const page = useSelectedLayoutSegment();

  return (
    <UiKitToolbar
      title={page ? pageTitleMap[page] ?? '' : ''}
      toolbarActions={<ToolbarActions />}
    />
  );
};

export default Toolbar;
