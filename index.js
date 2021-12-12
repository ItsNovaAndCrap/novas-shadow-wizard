function novas_shadow_wizard(options) {
    let images = document.querySelectorAll('.nswizard');

    if (options.shadow_type === 'hard')
        options.shadow_type = '0px'
    else
        options.shadow_type = '15px'
    
    images.forEach(image => {
        image.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.12)`;

        if (options.padding) {
            image.style.padding = '1em';
        }
    })
}

module.exports.novas_shadow_wizard = novas_shadow_wizard;