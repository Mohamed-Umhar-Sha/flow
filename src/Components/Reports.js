import React from 'react';
import { useState } from 'react';
import MUIDataTable from "mui-datatables";
import { Button, Modal, createTheme, ThemeProvider } from '@mui/material';
import './style.css'
const Reports = ({ open, data }) => {
    const [selectedRow, setSelectedRow] = useState(null);

    const handleReportButtonClick = (rowData) => {
        setSelectedRow(rowData);
    };

    const handleCloseModal = () => {
        setSelectedRow(null);
    };

    const getMuiTheme = () =>
    createTheme({
        typography: {
            fontFamily: "",
        },
        components: {
            MuiTableCell: {
                styleOverrides: {
                    head: {
                        padding: "10px 4px",
                        textAlign: "center", // Center align header text
                    },
                    body: {
                        padding: "7px 15px",
                        marginRight: "" // Center align body text
                    },
                },
            },
        },
    });



        const columns = [
          {
              name: 'campaignName',
              label: 'Campaign Name',
              options: {
                  customBodyRender: (value, tableMeta, updateValue) => (
                      <div style={{ textAlign: 'center' }}>{value}</div>
                  ),
              },
          },
          {
              name: 'date',
              label: 'Date',
              options: {
                  customBodyRender: (value, tableMeta, updateValue) => (
                      <div style={{ textAlign: 'center' }}>{value}</div>
                  ),
              },
          },
          {
              name: 'ownerName',
              label: 'Owner Name',
              options: {
                  customBodyRender: (value, tableMeta, updateValue) => (
                      <div style={{ textAlign: 'center' }}>{value}</div>
                  ),
              },
          },
          {
              name: 'contacts',
              label: 'Contacts',
              options: {
                  customBodyRender: (value, tableMeta, updateValue) => (
                      <div style={{ textAlign: 'center' }}>{value}</div>
                  ),
              },
          },
          {
              name: 'send',
              label: 'Send',
              options: {
                  customBodyRender: (value, tableMeta, updateValue) => (
                      <div style={{ textAlign: 'center' }}>{value}</div>
                  ),
              },
          },
          {
              name: 'failed',
              label: 'Failed',
              options: {
                  customBodyRender: (value, tableMeta, updateValue) => (
                      <div style={{ textAlign: 'center' }}>{value}</div>
                  ),
              },
          },
          {
              name: 'actions',
              label: 'Actions',
              options: {
                  customBodyRender: (value, tableMeta, updateValue) => (
                      <Button
                          variant="contained"
                          onClick={() => handleReportButtonClick(tableMeta.rowData)}
                          sx={{
                              backgroundColor: 'white',
                              color: '#00a727',
                              padding: '4px 12px',
                              textAlign: 'center',
                              borderRadius: '20px',
                              border: '3px solid #00a727',
                              textTransform: 'lowercase',
                              fontSize: '15px',
                              fontWeight: '600',
                              '&:hover': {
                                  backgroundColor: '#00a727',
                                  scale: '1.0',
                                  textAlign: 'center',
                                  color: 'white',
      
                              },
                              '&:focus': {
                                  backgroundColor: '#00a727',
                                  color: 'white'
                              },
                          }}
                      >
                          View
                      </Button>
                  ),
                  filter: false,
              },
          },
      ];
      

    const options = {
        filter: true,
        filterType: 'dropdown',
        responsive: 'standard',
        selectableRows: 'none',
        download: true,
        print: false,
        viewColumns: true,
        customToolbar: null,
        elevation: 0,
        rowsPerPage: 5,
        rowsPerPageOptions: [5,10, 25, 30],
    };
    return (
        <div>
            <div className="bg-white">
                <div>
                    <div className={`bg-white  mb-4  px-5 py-3`}>
                        <div className={`flex  justify-between items-center  text-lg font-bold`}>
                            <h2>LATEST CAMPAIGNS</h2>
                            <button className="flex gap-x-1  group  py-2.5 px-3.5 items-center border-[3px] rounded-full hover:bg-[--second]  border-[--second] ">
                                <span className="text-sm text-[--second] group-hover:text-white">EXPORT</span>
                            </button>
                        </div>
                    </div>
                    <div className={`bg-white border-2 mb-4 border-black rounded-xl px-5 py-3`}>
                        <ThemeProvider theme={getMuiTheme()}>
                            <div style={{ textTransform: 'uppercase', fontWeight: '900', height: '90%', width: '100%' }}>
                                <MUIDataTable
                                    title={'Campaign Report'}
                                    data={data}
                                    columns={columns}
                                    options={options}
                                    style={{ width: '100%', margin: '0', padding: '0' }}
                                />
                                <Modal open={selectedRow !== null} onClose={handleCloseModal}>
                                    <div>
                                        {selectedRow && (
                                            <div>
                                                <h2>{selectedRow.campaignName}</h2>
                                                <p>Date: {selectedRow.date}</p>
                                                <p>Owner name: {selectedRow.ownerName}</p>
                                                <p>Contacts: {selectedRow.contacts}</p>
                                                <p>Send: {selectedRow.send}</p>
                                                <p>Failed: {selectedRow.failed}</p>
                                            </div>
                                        )}
                                    </div>
                                </Modal>
                            </div>
                        </ThemeProvider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reports;
