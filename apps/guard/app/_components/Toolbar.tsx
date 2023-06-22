import { useSelectedLayoutSegment } from 'next/navigation';
import React from 'react';

import { Toolbar as UiKitToolbar } from '@rosen-bridge/ui-kit';

import ToolbarActions from '@/_components/ToolbarActions';

const pageTitleMap: Record<string, string> = {
  '(dashboard)': 'Dashboard',
  assets: 'Assets',
  events: 'Events',
  history: 'History',
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
