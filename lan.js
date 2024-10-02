document.getElementById('saveSettings').addEventListener('click', function() {
    const sourceLang = document.getElementById('sourceLang').value;
    const targetLang = document.getElementById('targetLang').value;

    localStorage.setItem('sourceLang', sourceLang);
    localStorage.setItem('targetLang', targetLang);

    alert('Translation settings saved successfully!');

    window.close();
});

document.addEventListener('DOMContentLoaded', function() {
    const savedSourceLang = localStorage.getItem('sourceLang') || 'en';
    const savedTargetLang = localStorage.getItem('targetLang') || 'es';
    
    document.getElementById('sourceLang').value = savedSourceLang;
    document.getElementById('targetLang').value = savedTargetLang;
});
