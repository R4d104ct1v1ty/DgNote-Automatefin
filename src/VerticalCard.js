const VerticalCard = (props) => {
    const {
        title,
        content,
        button,
        icons = [],
        onButtonClick  // New prop for handling button click
    } = props;
    
    // Function to chunk icons into rows of 3
    const chunkIcons = (icons, size) => {
        const chunks = [];
        for (let i = 0; i < icons.length; i += size) {
            chunks.push(icons.slice(i, i + size));
        }
        return chunks;
    };

    return (
        <div className="card mt-3 mb-3" style={{
            maxWidth: '350px',
            width: '100%',
            margin: '0 auto'
        }}>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title" style={{color: '#02A650'}}>{title}</h5>
                
                {icons.length > 0 ? (
                    <div className="icons-container" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        marginTop: '20px',
                        marginBottom: '20px'
                    }}>
                        {chunkIcons(icons, 3).map((row, rowIndex) => (
                            <div key={rowIndex} style={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '30px'
                            }}>
                                {row.map((icon, iconIndex) => (
                                    <div key={iconIndex} style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        textAlign: 'center'
                                    }}>
                                        <img 
                                            src={icon.icon} 
                                            alt={icon.title}
                                            style={{
                                                width: icon.size || '32px',
                                                height: icon.size || '32px',
                                                marginBottom: '8px'
                                            }}
                                        />
                                        <span style={{
                                            fontSize: '12px',
                                            fontWeight: '400'
                                        }}>
                                            {icon.title}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="card-text" style={{fontSize: '15px', marginTop: '5%'}}>{content}</p>
                )}
                
                {button === 'true' && (
                    <button 
                        onClick={onButtonClick}
                        className="btn btn-primary mt-auto" 
                        style={{
                            backgroundColor: '#0270A7',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        Explore
                    </button>
                )}
            </div>
        </div>
    );
};

export default VerticalCard;