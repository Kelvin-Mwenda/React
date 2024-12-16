import 'bootstrap/dist/css/bootstrap.min.css';
import {   usePDF, StyleSheet } from '@react-pdf/renderer';
import List from './List';
import Download from './Download';

function App() {
  const [instance, updateInstance] = usePDF({ document: <List/> });
  console.log(updateInstance)

  if (instance.loading) return <div>Loading ...</div>;

  if (instance.error) return <div>Something went wrong: {instance.error}</div>;

  const styles = StyleSheet.create({
  link: {
    textDecoration: 'none',
    padding: '10px',
    margin: '10px auto',
    backgroundColor: '#0091ff',
    color: 'white',
    fontSize: '1.5rem',
    borderRadius: '6px',
    border: 'none'
  }})

  return (
    <>
      {/* <PDFDownloadLink document={<MyDocument />} fileName="choco.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download now!'
        }
      </PDFDownloadLink> */}

      <a href={instance.url} style={styles.link} download="table.pdf">
        Download
      </a>
      
      <Download/>
      
    </>
  );
}

export default App;