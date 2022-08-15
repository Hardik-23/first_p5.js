function preload() 
{

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(0, 145);
    video = createCapture(VIDEO);

    tint_color = "";
}

function draw()
{
    circle(30,30,60)
    circle(610,30,60)
    circle(30,450,60)
    circle(610,450,60)
    tint(tint_color);
}

function take_snapshot()
{
    save('student_name.png');
}