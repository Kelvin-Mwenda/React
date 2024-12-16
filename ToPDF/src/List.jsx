import { Page, Text, Document, StyleSheet, Font, View } from '@react-pdf/renderer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './data.js';

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Oswald',
    marginBottom: 10
  },
  table: {
    display: 'table',
    width: 'auto',
    marginBottom: 20,
    border: '1px solid #000',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  tableColHeader: {
    width: '25%',
    padding: 5,
    fontSzie: 20,
    fontFamily: 'Oswald',
    fontWeight: 'bold',
    borderRightWidth: 1,
    borderRightColor: '#000',
    textAlign: 'center', // Center align header text
  },
  tableCol: {
    width: '25%',
    padding: 5,
    fontSize: 10,
    borderRightWidth: 1,
    borderRightColor: '#000',
    textAlign: 'center', // Center align cell text
  },
});

export default function List() {
  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <Text style={styles.title}>Contact List</Text>
        
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableColHeader}>First Name</Text>
            <Text style={styles.tableColHeader}>Last Name</Text>
            <Text style={styles.tableColHeader}>Email</Text>
            <Text style={styles.tableColHeader}>Phone</Text>
          </View>
          
          {data.map((item) => (
            <View style={styles.tableRow} key={item.id}>
              <Text style={styles.tableCol}>{item.first_name}</Text>
              <Text style={styles.tableCol}>{item.last_name}</Text>
              <Text style={styles.tableCol}>{item.email}</Text>
              <Text style={styles.tableCol}>{item.phone}</Text>
            </View>
          ))}
        </View>

        {/* Page number rendering */}
        <Text render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
      </Page>
    </Document>
  );
}
