import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export async function generatePDF() {
    const div = document.getElementById('budget')
    if (!div) return

    const canvas = await html2canvas(div)
    const imgData = canvas.toDataURL('image/png')

    const pdf = new jsPDF()
    const imgProps = pdf.getImageProperties(imgData)
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
    pdf.save('orcamento.pdf')
    return 'ok'
}
