import TableComponent from './TableComponent';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/TableComponent',
  component: TableComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Primary = {
  args: {
    zebra: false,
  },
};

export const ZebraMode = {
  args: {
    zebra: true,
    grids: false,
  },
};

export const GridMode = {
  args: {
    zebra: false,
    grids: true,
  },
};
