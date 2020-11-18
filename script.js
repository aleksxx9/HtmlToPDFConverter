document.getElementById('run').addEventListener('click', async () => {
    let html = document.getElementById('code').value;
    const pdf = document.getElementById('pdf');
    pdf.innerHTML = await html;
    convertToCanvas(pdf);
})

function convertToCanvas(pdf) {
    html2canvas(pdf, { useCORS : true,
        allowTaint : true, scale:5}).then(canvas => {
        pdf.innerHTML = "";
        pdf.appendChild(canvas);
    });
}


document.getElementById('convert').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const name = window.prompt('Please name your PDF file')
    if (!name) return;
    html2canvas(document.getElementById('pdf'), { scale:5 }).then(function (canvas) {
        doc.addImage(canvas, 'jpg', 0, 0, 210, 300);
        doc.save(name);
    });
})