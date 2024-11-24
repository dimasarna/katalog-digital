import {TabulatorFull as Tabulator} from '../dist/js/tabulator_esm.min.mjs'

document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close server connection settings
    function openServerConnectionSettings($component) {
        $component.classList.add('is-active');
    }

    function closeServerConnectionSettings($component) {
        $component.classList.remove('is-active');
    }

    const $serverConnectionSettingsOpenButton = document.querySelector('#open-server-connection-settings');
    const $serverConnectionSettingsComponent = document.getElementById($serverConnectionSettingsOpenButton.dataset.target);

    // Add a click event on buttons to open a server connection settings
    $serverConnectionSettingsOpenButton.addEventListener('click', () => {
        openServerConnectionSettings($serverConnectionSettingsComponent);
    });

    // Add a click event on close button to close the server connection settings
    const $serverConnectionCloseButton = document.querySelector('#close-server-connection-settings');
    $serverConnectionCloseButton.addEventListener('click', () => {
        closeServerConnectionSettings($serverConnectionSettingsComponent);
    });

    // Add a keyboard event to close server connection settings
    document.addEventListener('keydown', (event) => {
        if (event.key === "Escape") {
            closeServerConnectionSettings($serverConnectionSettingsComponent);
        }
    });

    const queryResultTable = new Tabulator('#query-result', {
        layout: 'fitColumns',
        columns: [
            {title: 'Nama Item', field: 'nama'},
            {title: 'Part Number', field: 'part_number'},
            {title: 'Satuan', field: 'satuan'},
            {title: 'Harga', field: 'harga'},
            {title: 'Referensi', field: 'referensi'},
        ],
    });

    const itemTable = new Tabulator('#item-table', {
        layout: 'fitColumns',
        columns: [
            {title: 'Nama Item', field: 'nama'},
            {title: 'Part Number', field: 'part_number'},
            {title: 'Satuan', field: 'satuan'},
            {title: 'Harga', field: 'harga'},
            {title: 'Referensi', field: 'referensi'},
        ],
    });
});