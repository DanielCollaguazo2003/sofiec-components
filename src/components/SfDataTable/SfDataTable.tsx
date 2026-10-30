import type { TableProps } from 'antd';
import { Table } from 'antd';
import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export interface SfDataTableOptionsColumn<RecordType extends object = object> {
  title?: ReactNode;
  key?: string;
  width?: number | string;
  fixed?: 'left' | 'right';
  align?: 'left' | 'center' | 'right';
  className?: string;
  render: (record: RecordType, index: number) => ReactNode;
}

export interface SfDataTableProps<RecordType extends object = object> extends TableProps<RecordType> {
  optionsColumn?: SfDataTableOptionsColumn<RecordType>;
}

function mergePagination<RecordType extends object>(pagination: TableProps<RecordType>['pagination']) {
  if (pagination === false) {
    return false;
  }

  return {
    size: 'small' as const,
    showSizeChanger: false,
    showQuickJumper: false,
    ...pagination,
  };
}

export const SfDataTable = <RecordType extends object = object>({
  className,
  pagination,
  optionsColumn,
  columns,
  dataSource,
  ...tableProps
}: SfDataTableProps<RecordType>) => {
  const normalizedColumns = optionsColumn
    ? [
        ...(columns ?? []),
        {
          key: optionsColumn.key ?? 'options',
          title: optionsColumn.title ?? 'Opciones',
          width: optionsColumn.width ?? 96,
          fixed: optionsColumn.fixed,
          align: optionsColumn.align ?? 'right',
          className: optionsColumn.className,
          render: (_: unknown, record: RecordType, index: number) => optionsColumn.render(record, index),
        },
      ]
    : columns;

  return (
    <Table<RecordType>
      {...tableProps}
      columns={normalizedColumns}
      dataSource={dataSource}
      pagination={mergePagination(pagination)}
      className={twMerge('sf-data-table', className)}
    />
  );
};
