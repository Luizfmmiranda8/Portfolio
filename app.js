let game_bx_1 = document.getElementById('game_bx_1');
let game_bx_1_left_btn = document.getElementById('game_bx_1_left_btn');
let game_bx_1_right_btn = document.getElementById('game_bx_1_right_btn');

game_bx_1_left_btn.addEventListener('click', () => 
{
    game_bx_1.scrollLeft -= 250;
});

game_bx_1_right_btn.addEventListener('click', () => 
{
    game_bx_1.scrollLeft += 250;
});

let day_night = document.getElementById('day_night');
let day_night2 = document.getElementById('day_night2');

day_night2.style.display = "none";

day_night.addEventListener('click', ()=>
{
    document.documentElement.style.setProperty('--color-1', 'rgb(255, 255, 255, .5)');
    document.documentElement.style.setProperty('--color-2', '#001714');
    document.documentElement.style.setProperty('--color-3', '#007564');
    document.documentElement.style.setProperty('--color-4', '#001714');
    document.documentElement.style.setProperty('--color-5', '#08F5D1');

    day_night.style.display = "none";
    day_night2.style.display = "unset";
});

day_night2.addEventListener('click', ()=>
{
    document.documentElement.style.setProperty('--color-1', '#001714');
    document.documentElement.style.setProperty('--color-2', '#fff');
    document.documentElement.style.setProperty('--color-3', '#08F5D1');
    document.documentElement.style.setProperty('--color-4', 'rgb(255, 255, 255, .5)');
    document.documentElement.style.setProperty('--color-5', '#007564');

    day_night.style.display = "unset";
    day_night2.style.display = "none";
});

// Battery Navigator
let active_battery = document.getElementById('active_battery');
let battery_icon = document.getElementById('battery_icon');
let battery_level = document.getElementById('battery_level');

navigator.getBattery().then(battery => 
{
    const battery_level_change = () =>
    {
        battery_level.innerText = (battery.level * 100) + "%"
    }

    setInterval(battery_level_change, 1000);
    battery_level_change();

    battery_icon.value = battery.charging;
    // alert(battery_icon.value);

    battery.addEventListener('chargingChange', () => 
    {
        switch (battery.charging)
        {
            case true:
                battery_icon.classList.remove('bi-battery-half');
                battery_icon.classList.add('bi-battery-charging');
                active_battery.classList.add('active_battery');
                battery_icon.style.color = "#fff";
                break;

            case false:
                battery_icon.classList.add('bi-battery-half');
                battery_icon.classList.remove('bi-battery-charging');
                active_battery.classList.remove('active_battery');
                battery_icon.style.color = "unset";
                break;
        }
    });
})

let wifi = document.getElementById('wifi');

const wifi_change = () => 
{
    if(navigator.onLine)
    {
        wifi.style.color = "var(--color-3)";
    }
    else
    {
        wifi.style.color = "";
    }
}

setInterval(wifi_change, 100);
wifi_change();

// Site navigation session
let session = document.getElementById('session');

let experiences = document.getElementById('experiences');
let games = document.getElementById('games');
let store = document.getElementById('store');
let about_me = document.getElementById('about_me');

let games_li = document.getElementById('games_li');
let experiences_li = document.getElementById('experiences_li');
let store_li = document.getElementById('store_li');
let about_me_li = document.getElementById('about_me_li');

let games_session = document.getElementById('games_session');
let games_session2 = document.getElementById('games_session2');
let experiences_session = document.getElementById('experiences_session');
let store_session = document.getElementById('store_session');
let about_me_session = document.getElementById('about_me_session');

experiences_session.style.visibility = 'hidden';
experiences_session.style.display = 'none';

store_session.style.visibility = 'hidden';
store_session.style.display = 'none';

about_me_session.style.visibility = 'hidden';
about_me_session.style.display = 'none';

games.addEventListener('click', ()=> 
{
    session.innerText = "Games";

    games_session.style.visibility = 'unset';
    games_session2.style.visibility = 'unset';
    experiences_session.style.visibility = 'hidden';
    store_session.style.visibility = 'hidden';
    about_me_session.style.visibility = 'hidden';
    
    games_session.style.display = '';
    games_session2.style.display = '';
    experiences_session.style.display = 'none';
    store_session.style.display = 'none';
    about_me_session.style.display = 'none';

    games_li.classList.add('active_li');
    experiences_li.classList.remove('active_li');
    store_li.classList.remove('active_li');
    about_me_li.classList.remove('active_li');
});

experiences.addEventListener('click', ()=> 
{
    session.innerText = "Experiences";

    experiences_session.style.visibility = 'unset';
    games_session.style.visibility = 'hidden';
    games_session2.style.visibility = 'hidden';
    store_session.style.visibility = 'hidden';
    about_me_session.style.visibility = 'hidden';
    
    experiences_session.style.display = '';
    games_session.style.display = 'none';
    games_session2.style.display = 'none';
    store_session.style.display = 'none';
    about_me_session.style.display = 'none';

    experiences_li.classList.add('active_li');
    games_li.classList.remove('active_li');
    store_li.classList.remove('active_li');
    about_me_li.classList.remove('active_li');
});

store.addEventListener('click', ()=> 
{
    session.innerText = "Store";

    store_session.style.visibility = 'unset';
    games_session.style.visibility = 'hidden';
    games_session2.style.visibility = 'hidden';
    experiences_session.style.visibility = 'hidden';
    about_me_session.style.visibility = 'hidden';
    
    store_session.style.display = '';
    games_session.style.display = 'none';
    games_session2.style.display = 'none';
    experiences_session.style.display = 'none';
    about_me_session.style.display = 'none';

    store_li.classList.add('active_li');
    games_li.classList.remove('active_li');
    experiences_li.classList.remove('active_li');
    about_me_li.classList.remove('active_li');
});

about_me.addEventListener('click', ()=> 
{
    session.innerText = "About me";

    about_me_session.style.visibility = 'unset';
    games_session.style.visibility = 'hidden';
    games_session2.style.visibility = 'hidden';
    experiences_session.style.visibility = 'hidden';
    store_session.style.visibility = 'hidden';
    
    about_me_session.style.display = '';
    games_session.style.display = 'none';
    games_session2.style.display = 'none';
    experiences_session.style.display = 'none';
    store_session.style.display = 'none';

    about_me_li.classList.add('active_li');
    games_li.classList.remove('active_li');
    experiences_li.classList.remove('active_li');
    store_li.classList.remove('active_li');
});