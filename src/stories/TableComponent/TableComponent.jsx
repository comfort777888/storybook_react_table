import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './TableComponent.scss';

const TableComponent = ({ backgroundColor, size, zebra, grids }) => {
  const ZebraMode = zebra ? 'zebra' : '';
  const GridsMode = grids ? 'grids' : '';
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [expandedRows, setExpandedRows] = useState({});
  const [filters, setFilters] = useState({
    title: '',
    body: '',
    id: '',
  });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((api) => {
        setData(api);
        setFilteredData(api);
      });
  }, []);

  const handleFilter = (e, column) => {
    const searchTerm = e.target.value.toLowerCase();
    setFilters({
      ...filters,
      [column]: searchTerm,
    });
  };

  useEffect(() => {
    const filtered = data.filter((item) => {
      return Object.keys(filters).every((column) => {
        if (column === 'title' && typeof item[column] === 'string') {
          return item[column].toLowerCase().includes(filters[column]);
        } else if (column === 'body' && typeof item[column] === 'string') {
          return item[column].toLowerCase().includes(filters[column]);
        } else if (column === 'id' && typeof item[column] === 'number') {
          return String(item[column]).includes(filters[column]);
        }
        return true; // Пропускаем нестроковые значения и фильтры для ID
      });
    });
    setFilteredData(filtered);
  }, [data, filters]);

  const toggleAccordion = (index) => {
    setExpandedRows((prevState) => {
      const isRowExpanded = prevState[index];
      return {
        ...prevState,
        [index]: !isRowExpanded,
      };
    });
  };

  return (
    <div className={`container`}>
      <div className="filter__container">
        <input
          type="text"
          value={filters.id}
          onChange={(e) => handleFilter(e, 'id')}
          placeholder="Фильтр ID"
        />
        <input
          type="text"
          value={filters.title}
          onChange={(e) => handleFilter(e, 'title')}
          placeholder="Фильтр Title"
        />
        <input
          type="text"
          value={filters.body}
          onChange={(e) => handleFilter(e, 'body')}
          placeholder="Фильтр Body"
        />
      </div>
      <table
        className={[
          'data__table',
          `data__table--${size}`,
          `body__table--${ZebraMode}`,
          `body__table--${GridsMode}`,
        ].join(' ')}>
        <thead>
          <tr className="table__header" style={backgroundColor && { backgroundColor }}>
            {data.length > 0 &&
              Object.keys(data[0]).map(
                (key) =>
                  key !== 'userId' && (
                    <th key={key} className="table-header-column">
                      {key !== 'id' ? <div>{key}</div> : 'ID'}
                    </th>
                  ),
              )}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                {item.title.length > 30 ? (
                  <span onClick={() => toggleAccordion(index)}>
                    {expandedRows[index] ? item.title : `${item.title.substring(0, 40)}...`}
                  </span>
                ) : (
                  item.title
                )}
              </td>
              <td>
                {item.body.length > 30 ? (
                  <span onClick={() => toggleAccordion(index)}>
                    {expandedRows[index] ? item.body : `${item.body.substring(0, 40)}...`}
                  </span>
                ) : (
                  item.body
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TableComponent.propTypes = {
  /**
   * What header background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the font be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Use zebra design for lines?
   */
  zebra: PropTypes.bool,
  /**
   * Use grid design for lines?
   */
  grids: PropTypes.bool,
  /**
   * Optional click handler
   */
};

TableComponent.defaultProps = {
  backgroundColor: null,
  size: 'medium',
  zebra: false,
  grids: false,
};

export default TableComponent;
