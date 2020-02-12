<template>
  <StyledTable
    :bordered="bordered"
    :striped="striped"
    :rowBorder="rowBorder"
    :rounded="rounded"
  >
    <slot />
  </StyledTable>
</template>

<script>
import styled, { css } from "vue-styled-components";

const bordered = css`
  & td {
    border-left: 1px solid ${props => props.theme.colorBorder};
    border-bottom: 1px solid ${props => props.theme.colorBorder};
  }

  & td:last-child {
    border-right: 1px solid ${props => props.theme.colorBorder};
  }

  & tr:first-child th {
    border-top: 1px solid ${props => props.theme.colorBorder};
  }

  & th {
    border-left: 1px solid ${props => props.theme.colorBorder};
    border-bottom: 1px solid ${props => props.theme.colorBorder};
  }

  & th:last-child {
    border-right: 1px solid ${props => props.theme.colorBorder};
  }
`;

const rowBorder = css`
  & th {
    border-bottom: 1px solid ${props => props.theme.colorBorder};
  }

  & td {
    border-bottom: 1px solid ${props => props.theme.colorBorder};
  }
`;

const striped = css`
  & tr:nth-child(even) td {
    background: ${props => props.theme.colorRowAlternate};
  }
`;

const rounded = css`
  & th:first-child {
    border-top-left-radius: ${props => props.theme.borderRadius};
  }

  & th:last-child {
    border-top-right-radius: ${props => props.theme.borderRadius};
  }

  & th:first-child {
    border-top-left-radius: ${props => props.theme.borderRadius};
  }

  & tbody tr:last-child td:first-child {
    border-bottom-left-radius: ${props => props.theme.borderRadius};
  }

  & tbody tr:last-child td:last-child {
    border-bottom-right-radius: ${props => props.theme.borderRadius};
  }
`;

const tableProps = {
  bordered: Boolean,
  striped: Boolean,
  rowBorder: Boolean,
  rounded: Boolean
};

const StyledTable = styled("table", tableProps)`
  width: 100%;
  background: white;
  border-collapse: separate !important;
  border-spacing: 0;
  border-style: hidden;

  & th {
    border-bottom: 1px solid transparent;
  }

  & td {
    border-bottom: 1px solid transparent;
  }

  ${props => (props.bordered ? bordered : "")};
  ${props => (props.striped ? striped : "")}
  ${props => (props.rounded ? rounded : "")}
  ${props => (props.rowBorder ? rowBorder : "")}
`;

export default {
  props: tableProps,
  components: {
    StyledTable
  }
};
</script>
