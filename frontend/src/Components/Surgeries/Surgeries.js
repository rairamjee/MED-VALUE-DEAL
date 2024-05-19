
import styles from "./Surheries.module.css";

export default function Surgeries() {

    function copyNumber(phoneNumber) {
        navigator.clipboard.writeText(phoneNumber).catch(err => {
            console.error('Failed to copy: ', err);
        });
    }
    return (
        <>
       
            <div style={{ textAlign: 'center' }}>
                <br/>
                <h4>Immediate help at your fingertips. Click on the numbers below to call an ambulance in an emergency<i class="bi bi-bandaid-fill"></i></h4>

                <h1 >Find Your City<i class="bi bi-search"></i></h1>
            </div>
            <div className={styles['btn-group']}>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Kolkata</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Haryana</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Bihar</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Pune</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Bengaluru</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Chennai</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Ahemdabad</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Surat</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Jaipur</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Lucknow</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Gorakhpur</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Kanpur</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Nagpur</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Indore</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Agra</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Moradabad </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Meerut</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Aligarh </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Kolhapur </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Asansol </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Udaipur </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Jamshedpur </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Amritsar </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Surat </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Shimla </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Ranchi </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Chandigarh </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Thiruvananthapuram </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Bhopal </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Maharashtra</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Nagaland</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Sikkim</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Tripura</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Uttarakhand</button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>

                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Noida </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Siliguri </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Durgapur </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Dehradun </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Thane </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Guntur  </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Jalandhar  </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Thane </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Rourkela  </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <button className={styles['dropdown-btn']}>Tirupati  </button>
                    <div className={styles['dropdown-content']}>
                        <a href="tel:8910171611">8910171611{" "}<span onClick={() => copyNumber('8910171611')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9830120158">9830120158{" "}<span onClick={() => copyNumber('9830120158')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:9477229182">9477229182{" "}<span onClick={() => copyNumber('9477229182')}><i class="bi bi-copy"></i></span></a>
                        <a href="tel:6290805022">6290805022{" "}<span onClick={() => copyNumber('6290805022')}><i class="bi bi-copy"></i></span></a>
                    </div>
                </div>

            </div>


        </>
    );
}
