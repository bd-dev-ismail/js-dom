const sections = document.querySelectorAll('section');
for(const section of sections){
   
        section.style.border = '2px solid red';
        section.style.margin = '5px';
        section.style.borderRadius = '15px';
        section.style.paddingLeft = '7px',
        section.style.backgroundColor = 'pink'
        
}

// const placeLab = document.getElementsById('lab-container')
// placeLab.style.backgroundColor = 'yellow';
const labContainer = document.getElementById('lab-container');
labContainer.classList.add('text-center');
labContainer.classList.remove('lg-text');
