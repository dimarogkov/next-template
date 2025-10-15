import TabsWrapper from './TabsWrapper';
import TabsList from './TabsList';
import TabsTab from './TabsTab';
import TabsPanels from './TabsPanels';
import TabsPanel from './TabsPanel';

export const Tabs = Object.assign(TabsWrapper, {
    TabList: TabsList,
    Tab: TabsTab,
    Panels: TabsPanels,
    Panel: TabsPanel,
});
