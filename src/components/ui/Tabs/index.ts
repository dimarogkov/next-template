import TabsList from './TabsList';
import TabsPanel from './TabsPanel';
import TabsPanels from './TabsPanels';
import TabsTab from './TabsTab';
import TabsWrapper from './TabsWrapper';

const Tabs = Object.assign(TabsWrapper, {
    TabList: TabsList,
    Tab: TabsTab,
    Panels: TabsPanels,
    Panel: TabsPanel,
});

export default Tabs;
