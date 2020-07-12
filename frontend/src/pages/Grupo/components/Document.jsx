import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        padding: 40
    },
    title: {
        color: '#202020',
        fontSize: 22
    },
    groupTitle: {
        marginTop: 10,
        color: '#3E76D7'
    },
    tableHeader: {
        marginTop: 40,
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: 14
    },
    rowTable: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: 12,
        textAlign: 'left'
    }
});

const DocumentPDF = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={{textAlign: 'center'}}>
                <Text style={styles.title}>Lista de alumnos del grupo</Text>
                <Text style={styles.groupTitle}>2 ° 1 - Programación</Text>
            </View>
            <View>
                <View style={styles.tableHeader}>
                    <Text>No. control</Text>
                    <Text>Nombre del alumno</Text>
                    <Text>Reportes</Text>
                    <Text>Citatorios</Text>
                    <Text>Suspensiones</Text>
                </View>
                <View style={styles.rowTable}>
                    <Text>17328060220509</Text>
                    <Text>Lagunes Robles Jesus Guillermo</Text>
                    <Text>0</Text>
                    <Text>0</Text>
                    <Text>0</Text>
                </View>
            </View>
        </Page>
    </Document>
)

export default DocumentPDF
