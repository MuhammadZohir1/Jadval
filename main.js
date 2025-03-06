const table = document.getElementById('paymentTable');

    // Load saved data from localStorage
    function loadTableData() {
        const savedData = JSON.parse(localStorage.getItem('paymentData'));
        if (savedData) {
            for (let rowIndex = 1; rowIndex < table.rows.length; rowIndex++) {
                for (let colIndex = 1; colIndex < table.rows[rowIndex].cells.length; colIndex++) {
                    table.rows[rowIndex].cells[colIndex].textContent = savedData[rowIndex - 1][colIndex - 1] || '';
                }
            }
        }
    }

    // Save table data to localStorage
    function saveTableData() {
        const tableData = [];
        for (let rowIndex = 1; rowIndex < table.rows.length; rowIndex++) {
            const rowData = [];
            for (let colIndex = 1; colIndex < table.rows[rowIndex].cells.length; colIndex++) {
                rowData.push(table.rows[rowIndex].cells[colIndex].textContent);
            }
            tableData.push(rowData);
        }
        localStorage.setItem('paymentData', JSON.stringify(tableData));
    }

    // Attach event listeners to each cell for saving data on edit
    for (let rowIndex = 1; rowIndex < table.rows.length; rowIndex++) {
        for (let colIndex = 1; colIndex < table.rows[rowIndex].cells.length; colIndex++) {
            table.rows[rowIndex].cells[colIndex].addEventListener('input', saveTableData);
        }
    }

    loadTableData();