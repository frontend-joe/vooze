<template>
  <styled-wrapper>
    <PageTitle>
      Table
    </PageTitle>
    <div class="row">
      <div class="col-lg-6">
        <Card>
          <CardHeader>
            <CardTitle cardTitle="Default" />
          </CardHeader>
          <CardContent>
            <Table>
              <Thead>
                <Tr>
                  <Th v-for="h in headings" :key="h">
                    {{ h }}
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr v-for="r in rows" :key="r.id">
                  <Td v-for="h in headings" :key="h">
                    {{ r[h.toLowerCase()] }}
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </CardContent>
        </Card>
      </div>
      <div class="col-lg-6">
        <Card>
          <CardHeader>
            <CardTitle cardTitle="Bordered" />
          </CardHeader>
          <CardContent>
            <Table bordered>
              <Thead>
                <Tr>
                  <Th v-for="h in headings" :key="h">
                    {{ h }}
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr v-for="r in rows" :key="r.id">
                  <Td v-for="h in headings" :key="h">
                    {{ r[h.toLowerCase()] }}
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </CardContent>
        </Card>
      </div>
      <div class="col-lg-6">
        <Card>
          <CardHeader>
            <CardTitle cardTitle="Rounded" />
          </CardHeader>
          <CardContent>
            <Table rounded bordered>
              <Thead>
                <Tr>
                  <Th v-for="h in headings" :key="h">
                    {{ h }}
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr v-for="r in rows" :key="r.id">
                  <Td v-for="h in headings" :key="h">
                    {{ r[h.toLowerCase()] }}
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </CardContent>
        </Card>
      </div>
      <div class="col-lg-6">
        <Card>
          <CardHeader>
            <CardTitle cardTitle="Row Border" />
          </CardHeader>
          <CardContent>
            <Table rowBorder>
              <Thead>
                <Tr>
                  <Th v-for="h in headings" :key="h">
                    {{ h }}
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr v-for="r in rows" :key="r.id">
                  <Td v-for="h in headings" :key="h">
                    {{ r[h.toLowerCase()] }}
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </CardContent>
        </Card>
      </div>
      <div class="col-lg-6">
        <Card>
          <CardHeader>
            <CardTitle cardTitle="Striped" />
          </CardHeader>
          <CardContent>
            <Table striped bordered>
              <Thead>
                <Tr>
                  <Th v-for="h in headings" :key="h">
                    {{ h }}
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr v-for="r in rows" :key="r.id">
                  <Td v-for="h in headings" :key="h">
                    {{ r[h.toLowerCase()] }}
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </CardContent>
        </Card>
      </div>
      <div class="col-lg-6">
        <Card>
          <CardHeader>
            <CardTitle cardTitle="Custom" />
          </CardHeader>
          <CardContent>
            <Table bordered rounded striped>
              <Thead>
                <Tr>
                  <Th v-for="h in headings" :key="h">
                    {{ h }}
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr v-for="r in rows" :key="r.id">
                  <Td v-for="h in headings" :key="h">
                    {{ r[h.toLowerCase()] }}
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  </styled-wrapper>
</template>

<script>
import styled from "vue-styled-components";
import { Card, CardHeader, CardTitle, CardContent } from "../../../shared/card";
import { Table, Thead, Tbody, Tr, Th, Td } from "../../../shared/table";
import { PageTitle } from "../../../shared/page";

const StyledWrapper = styled.div``;

export default {
  components: {
    StyledWrapper,
    PageTitle,
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td
  },
  data: function() {
    return {
      headings: ["Title", "Date", "Value"],
      rows: [
        {
          id: 1,
          title: "Orange Granola",
          date: "Jun 04, 2019",
          value: "33,456"
        },
        {
          id: 2,
          title: "Arctic Breeze",
          date: "Apr 04, 2019",
          value: "33,456"
        },
        {
          id: 3,
          title: "Ray Gray",
          date: "Aug 04, 2019",
          value: "33,456"
        },
        {
          id: 4,
          title: "Dark Earl",
          date: "Oct 04, 2019",
          value: "33,456"
        },
        {
          id: 5,
          title: "Splendid Dip",
          date: "Apr 04, 2019",
          value: "33,456"
        }
      ]
    };
  }
};
</script>
